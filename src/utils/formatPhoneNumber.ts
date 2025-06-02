/**
 * Formats a phone number string into Korean phone number format (000-0000-0000)
 * @param value - The phone number string to format
 * @returns The formatted phone number string
 */
export const formatPhoneNumber = (value: string): string => {
  // Remove all non-numeric characters
  const numbers = value.replace(/[^\d]/g, "");

  // Return empty if no numbers
  if (!numbers) return "";

  // Format the number
  if (numbers.length <= 3) {
    return numbers;
  } else if (numbers.length <= 7) {
    return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
  } else {
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(
      7,
      11
    )}`;
  }
};
