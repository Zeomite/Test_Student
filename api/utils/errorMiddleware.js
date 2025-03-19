/**
 * Global error handling middleware.
 * @param err - Error object.
 * @param req - Express request object.
 * @param res - Express response object.
 * @param next - Express next middleware function.
 */
function errorHandler(err, req, res, next) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
  
module.exports = errorHandler;
  