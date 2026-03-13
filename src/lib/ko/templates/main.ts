export const mainTemplate = /*html*/ `
    <div
        data-bind="reactMain: { 
            component, 
            props: computedProps()
        }"
      ></div>
    `;
