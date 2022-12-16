# Image Processing API

This API can be used in two different ways. As a simple placeholder API, the first allows you to place images into your frontend with the size set via URL parameters (and additional stylization if you choose) for rapid prototyping. The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image will used throughout the site, the API created will handle resizing and serving stored images.

### Required scripts

```yaml
{
  'scripts':
    {
      'prettier': 'prettier --config .prettierrc "src/**/*.ts" --write',
      'lint': 'eslint src/**/*.ts',
      'start': 'nodemon src/index.ts',
      'build': 'npx tsc',
      'jasmine': 'npx jasmine',
      'test': 'npm run build && npm run jasmine'
    }
}
```

### Endpoint

- Get the server running with `npm run start`
- Use this end point `http://localhost:3000/api/resizeimage?filename=icelandwaterfall.jpg&width=450&height=400`
- Change the query parameter to you desired reshape size

### Functionalities

- Resize images using the query parameters.
- Accept and output other image formats than JPG.
- Modifies the thumbnail filename to include the image size to allow for multiple sizes of the same image.
- Logs record when images are processed or accessed.
