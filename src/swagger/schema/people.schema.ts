export const peopleDtoSchema = {
  PeopleDto: {
    type: "object",
    properties: {
      name: {
        type: "string",
      },
      email: {
        type: "string",
        format: "email",
      },
      phone: {
        type: "string",
      },
      image: {
        type: "file",
      },
    },
    required: ["name"],
  },
};

export const routeTags = {
  PeopleRoutes: {
    name: "People",
    description: "This is for API people",
  },
};

export const routeAnnotations = {
  // To get all People
  getPeople: {
    tags: [routeTags.PeopleRoutes.name],
    summary: "Get all people",
    description: "Returns all people",
    responses: {
      200: { description: "successful operation" },
    },
  },

  //   To add new people
  addPeople: {
    tags: [routeTags.PeopleRoutes.name],
    summary: "Add a person",
    requestBody: {
      content: {
        "multipart/form-data": {
          schema: {
            $ref: "#/components/schemas/PeopleDto",
          },
        },
      },
    },
    responses: {
      "200": {
        description: "Person added successfully",
      },
    },
  },

  //   To get People by ID
  getPeopleById: {
    tags: [routeTags.PeopleRoutes.name],
    summary: "Get single people by ID",
    description: "Returns a single people",
    parameters: [
      {
        in: "path",
        name: "id",
        required: true,
        description: "ID of the people",
      },
    ],
    responses: {
      200: { description: "successful operation" },
      400: { description: "Invalid ID supplied" },
      404: { description: "Not Found" },
    },
  },

  //   To patch People by ID
  patchPeople: {
    tags: [routeTags.PeopleRoutes.name],
    summary: " Update an existing people",
    description: "Update an existing people by Id",
    parameters: [
      {
        in: "path",
        name: "id",
        required: true,
        description: "ID of the people",
        schema: {
          type: "string",
        },
      },
    ],
    requestBody: {
      description: "Update an existent people in the contacts",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/PeopleDto",
          },
        },
      },
    },
    responses: {
      200: { description: "successful operation" },
    },
  },

  //   To delete People
  deletePeople: {
    tags: [routeTags.PeopleRoutes.name],
    summary: "Delete by ID",
    description: "This is to delete single data",
    parameters: [
      {
        in: "path",
        name: "id",
        required: true,
        description: "Delete people by ID",
      },
    ],
    responses: {
      200: { description: "successful operation" },
      404: { description: "Not Found" },
    },
  },
};
