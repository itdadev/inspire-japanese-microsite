export function switchSlashToEmptySpace(value) {
  if (typeof value === "string" && value.includes("://")) {
    return value;
  } else if (typeof value === "string") {
    return value.replaceAll("//", "<wbr/>");
  }
}