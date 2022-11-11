const { addBookHandler , getAllBooksHandler} = require('./handler');

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

    // {
    //     method: 'GET',
    //     path: '/books/{id}',
    //     handler: getNoteByIdHandler,
    // },
    // {
    //     method: 'PUT',
    //     path: '/books/{id}',
    //     handler: editNoteByIdHandler,
    //   },
    //   {
    //     method: 'DELETE',
    //     path: '/bookss/{id}',
    //     handler: deleteNoteByIdHandler,
    //   },
    ];

module.exports = routes;
