import { peopleDtoSchema, routeAnnotations } from "./schema/people.schema";

export const apiDocumentation = {
  openapi: "3.0.0",
  info: {
    title: "Contact App Backend",
    version: "15",
    description: "API documentation for Contact App",
    summary: "",
    termsOfService: "",
    contact: {
      name: "Sakar Aryal",
      url: "https://techiesakar.com",
      email: "techiesakar@gmail.com",
    },
    servers: [
      {
        url: "http://localhost:5003",
      },
    ],
  },
  paths: {
    "/people/": {
      get: routeAnnotations.getPeople,
      post: routeAnnotations.addPeople,
    },
    "/people/{id}": {
      get: routeAnnotations.getPeopleById,
      patch: routeAnnotations.patchPeople,
      delete: routeAnnotations.deletePeople,
    },
  },
  components: {
    schemas: peopleDtoSchema,
  },
};
