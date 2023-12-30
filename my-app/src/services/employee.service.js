import httpClient from "../http-common";

const employeeService = {
  getAll: () => {
    return httpClient.get('/employees');
  },
  
  create: data => {
    return httpClient.post("/employees", data);
  },

  get: id => {
    return httpClient.get(`/employees/${id}`);
  },

  update: data => {
    return httpClient.put('/employees', data);
  },

  remove: id => {
    return httpClient.delete(`/employees/${id}`);
  }
};

export default employeeService;
