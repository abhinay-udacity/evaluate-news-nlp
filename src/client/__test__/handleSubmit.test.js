import { handleSubmit } from '../js/formHandler';
import { JSDOM } from 'jsdom';

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        score_tag: 'positive',
        confidence: 0.85,
        subjectivity: 'subjective',
        sentence_list: [{ text: 'Sample sentence.' }],
      }),
  })
);

describe('handleSubmit function', () => {
  test('it should prevent default form submission and fetch data', async () => {
    // Create a simulated DOM environment using jsdom
    const { document } = new JSDOM('<!doctype html><html><body></body></html>').window;

    // Mock the event and form element
    const preventDefaultMock = jest.fn();
    const event = { preventDefault: preventDefaultMock };
    document.body.innerHTML = `
      <form id="test-form">
        <input id="content" type="text" value="Sample input" />
      </form>
      <div id="polarity"></div>
      <div id="confidence"></div>
      <div id="subjectivity"></div>
      <div id="text"></div>
    `;

    // Temporarily assign the document to the global object for this test
    global.document = document;

    // Call the handleSubmit function
    await handleSubmit(event);

    // Assertions
    expect(preventDefaultMock).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledTimes(1);

    // Verify the content has been populated
    expect(document.getElementById("polarity").innerHTML).toBe('positive');
    expect(document.getElementById("confidence").innerHTML).toBe('0.85');
    expect(document.getElementById("subjectivity").innerHTML).toBe('subjective');
    expect(document.getElementById("text").innerHTML).toBe('Sample sentence.');

    // Remove the global document assignment after the test
    delete global.document;
  });

  // Add more test cases for different scenarios here
});
