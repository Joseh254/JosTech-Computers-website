export function getallProducts(request, response) {
  response.send("getting all products");
}

export function getSingleProduct(request, response) {
  response.send("getting single product");
}

export function createProduct(request, response) {
  response.send("creating a product");
}

export function deleteProduct(request, response) {
  response.send("deleting a product");
}

export function updateProduct(request, response) {
  response.send("updating product");
}
