const customGridSchema = {
  title: "Grid Costum",
  type: "object",
  properties: {
    gridType: {
      title: 'Tipo de Grilla',
      type: 'number',
      enum: [
        1,
        2,
        3,
        3
      ]
    }
  }
}

export default customGridSchema
