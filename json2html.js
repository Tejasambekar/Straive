// json2html.js
export default function json2html(data) {
    // Start creating the HTML for the table
    let html = `<table data-user="tejasambekarkumar@gmail.com">`;

    // Create the header row based on unique keys from all objects
    const headers = [...new Set(data.flatMap(Object.keys))];
    html += `<thead><tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr></thead>`;

    // Create the rows of the table
    html += `<tbody>`;
    for (const row of data) {
        html += `<tr>`;
        headers.forEach(header => {
            html += `<td>${row[header] !== undefined ? row[header] : ''}</td>`;
        });
        html += `</tr>`;
    }
    html += `</tbody></table>`;

    // Return the generated HTML table as a string
    return html;
}
