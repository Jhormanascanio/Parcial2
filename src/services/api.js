// Servicio para consumir la API de FakeStore
// Documentación: https://fakestoreapi.com/docs

const API_BASE_URL = 'https://fakestoreapi.com'

/**
 * Servicio de API para gestión de productos
 */
const productService = {
  /**
   * Obtener todos los productos
   * @returns {Promise<Array>}
   */
  async getAll() {
    try {
      const response = await fetch(`${API_BASE_URL}/products`)
      if (!response.ok) throw new Error('Error al obtener productos')
      return await response.json()
    } catch (error) {
      console.error('Error en getAll:', error)
      throw error
    }
  },

  /**
   * Obtener un producto por ID
   * @param {number} id - ID del producto
   * @returns {Promise<Object>}
   */
  async getById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`)
      if (!response.ok) throw new Error('Producto no encontrado')
      return await response.json()
    } catch (error) {
      console.error('Error en getById:', error)
      throw error
    }
  },

  /**
   * Crear un nuevo producto
   * @param {Object} product - Datos del producto
   * @returns {Promise<Object>}
   */
  async create(product) {
    try {
      const response = await fetch(`${API_BASE_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      })
      if (!response.ok) throw new Error('Error al crear producto')
      return await response.json()
    } catch (error) {
      console.error('Error en create:', error)
      throw error
    }
  },

  /**
   * Actualizar un producto existente
   * @param {number} id - ID del producto
   * @param {Object} product - Datos actualizados
   * @returns {Promise<Object>}
   */
  async update(id, product) {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      })
      if (!response.ok) throw new Error('Error al actualizar producto')
      return await response.json()
    } catch (error) {
      console.error('Error en update:', error)
      throw error
    }
  },

  /**
   * Eliminar un producto
   * @param {number} id - ID del producto
   * @returns {Promise<Object>}
   */
  async delete(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: 'DELETE'
      })
      if (!response.ok) throw new Error('Error al eliminar producto')
      return await response.json()
    } catch (error) {
      console.error('Error en delete:', error)
      throw error
    }
  },

  /**
   * Obtener todas las categorías
   * @returns {Promise<Array<string>>}
   */
  async getCategories() {
    try {
      const response = await fetch(`${API_BASE_URL}/products/categories`)
      if (!response.ok) throw new Error('Error al obtener categorías')
      return await response.json()
    } catch (error) {
      console.error('Error en getCategories:', error)
      throw error
    }
  },

  /**
   * Obtener productos por categoría
   * @param {string} category - Nombre de la categoría
   * @returns {Promise<Array>}
   */
  async getByCategory(category) {
    try {
      const response = await fetch(`${API_BASE_URL}/products/category/${category}`)
      if (!response.ok) throw new Error('Error al obtener productos por categoría')
      return await response.json()
    } catch (error) {
      console.error('Error en getByCategory:', error)
      throw error
    }
  }
}

export default productService
