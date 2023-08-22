export const districtDtoSchema = {
  DistrictDto: {
    type: "object",
    properties: {
      name: {
        type: "string",
      },
    },
    required: ["name"],
  },
};

export const routeTags = {
  DistrictRoutes: {
    name: "District",
    description: "This is for API district",
  },
};

export const districtRouteAnnotations = {
  // To get all District
  getDistrict: {
    tags: [routeTags.DistrictRoutes.name],
    summary: "Get all district",
    description: "Returns all district",
    responses: {
      200: { description: "successful operation" },
    },
  },

  //   To add new district
  addDistrict: {
    tags: [routeTags.DistrictRoutes.name],
    summary: "Add a district",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/DistrictDto",
          },
        },
      },
    },

    responses: {
      "200": {
        description: "District added successfully",
      },
    },
  },

  //   To get District by ID
  getDistrictById: {
    tags: [routeTags.DistrictRoutes.name],
    summary: "Get single district by ID",
    description: "Returns a single district",
    parameters: [
      {
        in: "path",
        name: "id",
        required: true,
        description: "ID of the district",
      },
    ],
    responses: {
      200: { description: "successful operation" },
      400: { description: "Invalid ID supplied" },
      404: { description: "Not Found" },
    },
  },

  //   To patch District by ID
  patchDistrict: {
    tags: [routeTags.DistrictRoutes.name],
    summary: " Update an existing district",
    description: "Update an existing district by Id",
    parameters: [
      {
        in: "path",
        name: "id",
        required: true,
        description: "ID of the district",
        schema: {
          type: "string",
        },
      },
    ],
    requestBody: {
      description: "Update an existent district in the contacts",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/DistrictDto",
          },
        },
      },
    },
    responses: {
      200: { description: "successful operation" },
    },
  },

  //   To delete District
  deleteDistrict: {
    tags: [routeTags.DistrictRoutes.name],
    summary: "Delete by ID",
    description: "This is to delete single data",
    parameters: [
      {
        in: "path",
        name: "id",
        required: true,
        description: "Delete district by ID",
        schema: {
          type: "number",
        },
      },
    ],
    responses: {
      200: { description: "successful operation" },
      404: { description: "Not Found" },
    },
  },
};
