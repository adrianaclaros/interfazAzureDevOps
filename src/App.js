import React, { useState } from 'react';
import CustomFieldsList from './components/CustomFieldsList';

const App = () => {
  const [organization, setOrganization] = useState('');
  const [project, setProject] = useState('');
  const [token, setToken] = useState('');

  return (
    <div>
      <h1>Gestión de Campos Personalizados en Azure DevOps</h1>
      <input 
        type="text" 
        placeholder="Organización" 
        value={organization} 
        onChange={(e) => setOrganization(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Proyecto" 
        value={project} 
        onChange={(e) => setProject(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Token de acceso" 
        value={token} 
        onChange={(e) => setToken(e.target.value)} 
      />
      <CustomFieldsList organization={organization} project={project} token={token} />
    </div>
  );
};

export default App;
