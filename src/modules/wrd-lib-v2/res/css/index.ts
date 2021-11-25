import notifications_sheet from "raw-loader!./general.style.css";

enum SheetDestination {
  Head = 1,
  Body,
}

function InsertSheet(
  sourceCode: string,
  destination: SheetDestination = SheetDestination.Head
) {
  const sheet = document.createElement("style");
  sheet.textContent = sourceCode;
  switch (destination) {
    case SheetDestination.Head:
      if (document.head != null) {
        document.head.appendChild(sheet);
      } else {
        document.addEventListener("readystatechange", () => {
          if (document.head != null) {
            document.head.appendChild(sheet);
          }
        });
      }
      break;
    case SheetDestination.Body:
      if (document.head != null) {
        document.head.appendChild(sheet);
      } else {
        document.addEventListener("readystatechange", () => {
          if (document.head != null) {
            document.head.appendChild(sheet);
          }
        });
      }
      break;
    default:
      break;
  }
}

InsertSheet(notifications_sheet);
