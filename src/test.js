
// const { nanoid } = require('nanoid');
// const books = require('./books');


//                         const addBookHandler = (Request, h) => {
//                             const { name,
//                                     year,
//                                     author,
//                                     summary,
//                                     publisher,
//                                     pageCount,readPage,reading } = Request.payload;
//                             const id = nanoid(16);
//                             const insertedAt = new Date().toISOString();
//                             const updatedAt = insertedAt;
//                             const finished = () => {
//                                 if (pageCount === readPage){
//                                     return true;
//                                 } else {
//                                     return false;
//                                 }
//                             }
//                             const newBook = {
//                                 id,
//                                 name,
//                                 year,
//                                 author,
//                                 summary,
//                                 publisher,
//                                 pageCount,
//                                 readPage,
//                                 finished,
//                                 reading,
//                                 insertedAt,
//                                 updatedAt,
//                             };
                            
//                             books.push(newBook);
//                             const isSuccess = books.filter((book) => book.id === id).length > 0;
                        

//                             if (isSuccess) {
//                                 const response = h.response({
//                                 status: 'success',
//                                 message: 'Buku berhasil ditambahkan',
//                                 data: {
//                                     bookId: id,
//                                 },
//                                 });
//                                 response.code(201);
//                                 return response;
//                             }
//                             const response = h.response({
//                                 status: 'error',
//                                 message: 'Buku gagal ditambahkan',
//                             });
//                             response.code(500);
//                             return response;
//                         };
    

                            

//                         const editbookByIdHandler = (request, h) => {
//                             const { id } = request.params;
//                             const { name,year,author,summary,publisher,pageCount,reasPage,reading } = request.payload;
//                             const updatedAt = new Date().toISOString();
//                             const index = notes.findIndex((note) => note.id === id);

//                             if (index !== -1) {
//                                 notes[index] = {
//                                   ...notes[index],
//                                   name,year,author,summary,publisher,pageCount,reasPage,reading,
//                                   updatedAt,
//                                 };
//                                 const response = h.response({
//                                   status: 'success',
//                                   message: 'Catatan berhasil diperbarui',
//                                 });
//                                 response.code(200);
//                                 return response;
//                               }
//                               const response = h.response({
//                                 status: 'fail',
//                                 message: 'Gagal memperbarui catatan. Id tidak ditemukan',
//                               });
//                               response.code(404);
//                               return response;
//                         };












//                         const deleteBookByIdHandler = (request, h) => {
//                             const { id } = request.params;
                        
//                             const index = books.findIndex((book) => book.id === id);
                        
//                             if (index !== -1) {
//                               books.splice(index, 1);
//                               const response = h.response({
//                                 status: 'success',
//                                 message: 'Catatan berhasil dihapus',
//                               });
//                               response.code(200);
//                               return response;
//                             }
                        
//                            const response = h.response({
//                               status: 'fail',
//                               message: 'Catatan gagal dihapus. Id tidak ditemukan',
//                             });
//                             response.code(404);
//                             return response;
//                           };
//                           const getAllBooksHandler = (request,h) =>{
//                             const response = h.response ({
//                                 status: 'success',
//                                 data : {
//                                     books:books.map((book) => ({
//                                         id : book.id,
//                                         name : book.name,
//                                         publisher:book.publisher,
//                                     })),
//                                 },
//                             });
//                             response.code(200);
//                             return response;
//                         };
                        
//                         const getBookByIdHandler = (request, h) => {
//                             const { id } = request.params;
//                             const book = books.filter((n) => n.id === id)[0];

//                             if (book !== undefined) {
//                                 return {
//                                 status: 'success',
//                                 data: {
//                                     book,
//                                 },
//                                 };
//                             }

//                             const response = h.response({
//                                 status: 'fail',
//                                 message: 'Catatan tidak ditemukan',
//                             });
//                             response.code(404);
//                             return response;
                            
//                         }; 


// module.exports = {addBookHandler, getAllBooksHandler, getBookByIdHandler, deleteBookByIdHandler, editbookByIdHandler};



                        // const editbookByIdHandler = (request, h) => {
                        //     const { id } = request.params;
                        //     const { name,year,author,summary,publisher,pageCount,readPage,reading } = request.payload;
                        //     const updatedAt = new Date().toISOString();
                        //     if (pageCount === readPage){
                        //         finished = true;
                        //     }
                        //     if (readPage > pageCount){
                        //         const response =h.response(
                        //             {
                        //                 status : 'fail',
                        //                 message : 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
                        //             }
                        //         );
                        //     }
                        //     if (name === undefined){
                        //         const response = h.response({
                        //             status : 'fail',
                        //             message : 'Gagal memperbarui buku. Mohon isi nama buku'
                        //         });

                        //     }

                        //     const index = books.findIndex((book) => book.id === id);

                        //     if (index !== -1) {
                        //         books[index] = {
                        //           ...books[index],
                        //           name,year,author,summary,publisher,pageCount,reasPage,reading,
                        //           updatedAt,
                        //         };
                        //         const response = h.response({
                        //           status: 'success',
                        //           message: 'Buku berhasil diperbarui',
                        //         });
                        //         response.code(200);
                        //         return response;
                        //       }
                        //       const response = h.response({
                        //         status: 'fail',
                        //         message: 'Gagal memperbarui Buku. Id tidak ditemukan',
                        //       });
                        //       response.code(404);
                        //       return response;
                        // };



                        //post
                        // const isName = books.filter((book) => book.name === "undefined");
                        //         const isreadPage = books.filter((book) => book.readPage > book.pageCount);

                        //         if (isName.length > 0) {
                        //             const response = h.response({
                        //                 status : 'fail',
                        //                 message : "Gagal menambahkan buku. Mohon isi nama buku",
                        //             });
                        //             response.code(400);
                        //             return response;
                        //         }
                        //         if(isreadPage.length > 0){
                        //             const response = h.response({
                        //                 status : 'fail',
                        //                 message : 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
                        //             });
                        //             response.code(400);
                        //             return response; 
                        //         }
