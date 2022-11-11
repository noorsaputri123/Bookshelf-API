const { addBookHandler , getAllBooksHandler, getBookByIdHandler, deleteBookByIdHandler, editbookByIdHandler} = require('./handler');

    const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },

    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editbookByIdHandler,
      },
      {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookByIdHandler,
      },
    ];

module.exports = routes;
