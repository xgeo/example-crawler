const Crawler = require('crawler');

const startCrawler = () => {
    const options = {
        maxConnections : 10
    };

    const c = new Crawler(options);
     
    c.queue([{
        uri: 'http://www.google.com',
        jQuery: false,
    
        callback: (error, res, done) => {
            if(error){
                console.log(error);
            }else{
                console.log('Grabbed', res.body.length, 'bytes');
            }
            done();
        }
    }]);
};


try {
    startCrawler();
} catch (error) {
    console.log(error);
}