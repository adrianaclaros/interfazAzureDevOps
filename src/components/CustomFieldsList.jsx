import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomFields } from '../redux/customFieldsSlice';

const CustomFieldsList = ({ organization, project, token }) => {
  const dispatch = useDispatch();
  const { fields, loading, error } = useSelector((state) => state.customFields);

  useEffect(() => {
    if (organization && project && token) {
      dispatch(fetchCustomFields({ organization, project, token }));
    }
  }, [organization, project, token, dispatch]);

  if (loading) return <p>Cargando campos personalizados...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Campos Personalizados</h2>
      <ul>
        {fields.map((field) => (
          <li key={field.referenceName}>{field.name} - {field.type}</li>
        ))}
      </ul>
    </div>
  );
};

export default CustomFieldsList;
