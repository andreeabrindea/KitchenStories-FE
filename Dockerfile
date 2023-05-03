# Use an existing Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the HTML, CSS, and JavaScript files to the container
COPY home.html .
COPY style.css .
COPY app.js .
COPY home_as_login.html .
COPY add_recipe_form.html .
COPY login_page.html .
COPY register_page.html .
COPY single_recipe.html .
COPY login_style.css .
COPY register_style.css .
COPY style_form.css .
COPY style_single.css .
COPY carlos-fernandez-w3awZjfVa6w-unsplash.jpg .
COPY gaelle-marcel-GaLWM8dX73U-unsplash.jpg .
COPY header.jpg .
COPY katie-smith-uQs1802D0CQ-unsplash.jpg .
COPY loginPhoto.jpg .
COPY registerPhoto.jpg .
COPY toa-heftiba-oQvESMKUkzM-unsplash.jpg .

# Expose port 80
EXPOSE 80

# Start the web server when the container starts
CMD ["npx", "http-server", "-p", "80"]
