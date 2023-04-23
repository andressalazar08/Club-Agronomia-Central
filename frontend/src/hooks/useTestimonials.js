import { useState } from 'react';
import axios from 'axios';

export function useTestimonials() {
  const [showForm, setShowForm] = useState(false);
  const [showModify, setShowModify] = useState(false);
  const [showWarn, setShowWarn] = useState(false);
  const [id, setId] = useState(false);
  const [createTestimonial, setCreateTestimonial] = useState(false);

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
      await axios.delete(`http://localhost:3001/api/testimonials/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handlerCreate = async (post) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3001/api/testimonials`,
        post
      );
      console.log(data.msg);
    } catch (error) {
      console.log(error);
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
    handlerDelete,
    handlerCreate,
    id,
    setId,
  };
}
