import { useState, useContext } from 'react';
import axios from 'axios';
import AppContext from '../../contexts/AppContext';

export function useTestimonials() {
  const [showForm, setShowForm] = useState(false);
  const [showModify, setShowModify] = useState(false);
  const [showWarn, setShowWarn] = useState(false);
  const [id, setId] = useState(false);
  const [createTestimonial, setCreateTestimonial] = useState(false);
  const [modifyTestimony, setModifyTestimony] = useState(false);
  const [postModify, setPostModify] = useState();
  const { testimonials, setTestiminials } = useContext(AppContext);

  const showModalForm = () => {
    setShowForm(!showForm);
  };
  const showModalWarn = () => {
    setShowWarn(!showWarn);
  };
  const showModalModify = () => {
    setShowModify(!showModify);
  };

  const handlerDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        // `http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/testimonials/${id}`
        `http://localhost:3001/api/testimonials/${id}`
      );
        data && setTestiminials(testimonials.filter(tes => tes._id !== id));
      console.log(data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const handlerCreate = async (post) => {
    try {
      const { data } = await axios.post(
        // `http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/testimonials`,
        `http://localhost:3001/api/testimonials`,
        post
      );
      data && setTestiminials([data.newTestimonial, ...testimonials]);
      console.log(data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const handlerModify = async (post) => {
    try {
      const { data } = await axios.put(
        // `http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/testimonials/${post.id}`,
        `http://localhost:3001/api/testimonials/${post.id}`,
        post
      );
      if (data) {
        const updateTestimonial=[...testimonials]
        const id = data.testimonial._id
        const index = updateTestimonial.findIndex(tes => tes._id === id);
        updateTestimonial[index] = data.testimonial;
        setTestiminials(updateTestimonial);
      }
      console.log(data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const stateGlobalTestimonials = async () => {
    if (testimonials.length === 0) {
      const res = await axios.get(
        // 'http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/testimonials'
        'http://localhost:3001/api/testimonials'
      );
      const response = res.data.reverse();
      setTestiminials(response);
    }
  };

  return {
    showModalForm,
    showModalWarn,
    showModalModify,
    showModify,
    showWarn,
    showForm,
    createTestimonial,
    setCreateTestimonial,
    modifyTestimony,
    setModifyTestimony,
    postModify,
    setPostModify,
    handlerDelete,
    handlerCreate,
    handlerModify,
    id,
    setId,
    stateGlobalTestimonials,
  };
}
