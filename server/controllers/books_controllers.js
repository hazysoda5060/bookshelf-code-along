let books =[
    // {
    //     id: 1,
    //     title: 'my boooook',
    //     author: 'my'
    // },
    // {
    //     id: 2,
    //     title: 'gabi book',
    //     author: 'gabi'
    // }
]
let id = 2

module.exports = {
    getBooks: (req, res) => {
        res.status(200).send(books)
    },
    addBook: (req, res) => {
        const {title, author} = req.body
        const newBook = {
            id,
            title,
            author,
        }
        id++
        books = [...books, newBook]
        res.status(200).send(books)
    },
    deleteBook: (req, res) => {
        console.log(req.params)
        const {id} = req.params
        books = books.filter(e => e.id !== +id)
        // const index = books.findIndex(e => e.id === +id)
        // books.splice(index, 1)
        res.status(200).send(books)
    },
    editBook: (req, res) => {
        const {id} = req.params
        const {title, author} = req.body
        const index = books.findIndex(e => e.id === +id)
        books[index] = {
            id: +id,
            title: title || books[index].title,
            author: author || books[index].title,
        }
        // books.splice(index, 1, {
        //     id: +id,
        //     title,
        //     author,
        // })
        res.status(200).send(books)
    },
}