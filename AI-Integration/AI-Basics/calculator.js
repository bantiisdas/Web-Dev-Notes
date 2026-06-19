export async function calculator(operation, number1, number2) {
  number1 = parseInt(number1);
  number2 = parseInt(number2);
  switch (operation) {
    case "add":
      return number1 + number2;
    case "subtract":
      return number1 - number2;
    case "multiply":
      return number1 * number2;
    case "divide":
      if (number2 === 0) {
        throw new Error("Denominator cannot be zero");
      }
      return number1 / number2;
    default:
      throw new Error("Invalid operation");
  }
}

export const calculateTool = {
  type: "function",
  function: {
    name: "calculator",
    description:
      "A simple calculator function that performs basic arithmetic operations",
    parameters: {
      type: "object",
      properties: {
        operation: {
          type: "string",
          enum: ["add", "subtract", "multiply", "divide"],
          description: "The arithmetic operation to perform",
        },
        number1: {
          type: "number",
          description: "The first number",
        },
        number2: {
          type: "number",
          description: "The second number",
        },
      },
      required: ["operation", "number1", "number2"],
    },
  },
};
