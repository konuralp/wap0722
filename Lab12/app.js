const express = require('express');
const path = require('path');
const app = express();

const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/usersRouter');

const publicPath = path.join(__dirname, 'public');
const htmlPath = path.join(publicPath, 'html');

app.set('port', process.env.PORT || 8000);


app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(publicPath));

app.get('/', (req,res, next)=>res.sendFile(path.join(htmlPath, 'index.html')));
app.use('/products',productRouter);
app.use('/users',userRouter);

app.use((req, res)=>{
    res.status(404).sendFile(path.join(htmlPath, '404.html'));
})

const port = app.get('port');

app.listen(port, () => {
    console.log('Server started running on ' + port);
});