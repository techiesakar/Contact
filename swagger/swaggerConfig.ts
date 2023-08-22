import {
  districtDtoSchema,
  districtRouteAnnotations,
} from "./schema/district.schema";
import {
  peopleDtoSchema,
  candidateRouteAnnotations,
} from "./schema/people.schema";

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
      get: candidateRouteAnnotations.getPeople,
      post: candidateRouteAnnotations.addPeople,
    },
    "/people/{id}": {
      get: candidateRouteAnnotations.getPeopleById,
      patch: candidateRouteAnnotations.patchPeople,
      delete: candidateRouteAnnotations.deletePeople,
    },

    // District Paths

    "/district/": {
      get: districtRouteAnnotations.getDistrict,
      post: districtRouteAnnotations.addDistrict,
    },
    "/district/{id}": {
      get: districtRouteAnnotations.getDistrictById,
      patch: districtRouteAnnotations.patchDistrict,
      delete: districtRouteAnnotations.deleteDistrict,
    },
  },
  components: {
    schemas: {
      ...peopleDtoSchema,
      ...districtDtoSchema,
    },
  },
};
