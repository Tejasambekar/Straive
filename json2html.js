// Export default function to convert JSON to HTML table
export default function json2html(data) {
  // Define the fixed headers
  const headers = ["Name", "Age", "Gender"];

  // Start building the HTML table as a string
  let html = <table data-user="tejasambekarkumar@gmail.com">;

  // Add the table headers
  html += `<thead><tr>${headers.map(header => <th>${header}</th>).join('')}</tr></thead>`;

  // Add the table rows
  html += <tbody>;
  data.forEach(row => {
    html += `<tr>${headers.map(header => <td>${row[header] || ''}</td>).join('')}</tr>`;
  });
  html += </tbody></table>;

  // Return the final HTML string
  return html;
}
