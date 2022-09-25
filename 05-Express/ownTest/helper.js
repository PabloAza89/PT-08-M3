let obj = {
    header: {
        connection: "close",
        "content-length": "5",
        "content-type": "text/html; charset=utf-8",
        date: "Sat, 24 Sep 2022 01:02:39 GMT",
        etag: 'W/"5-EflXjQXm97tYo83QAQfp9OOIJnE"',
        "x-powered-by": "Express",
    },
    req: {
        data: { author: "author", contents: "hi there", title: "title" },
        headers: {
            "content-type": "application/json",
            "user-agent": "node-superagent/3.8.3",
        },
        method: "post",
        url: "http://127.0.0.1:54051/posts",
    },
    status: 200,
    text: "error",
};

 // let string = "hey there"
    // let str = 'hey'
    // const regex = new RegExp(`${str}\\b`);
    // regex.test(string)

    // let str = 'hey'
    // let regex = new RegExp(`${str}\\b`, "g");
    // posts.filter(el => el.title.match(regex) !== null || el.author.match(regex) !== null || el.contents.match(regex) !== null)

    // let string = "hey there"
    // let str = 'hey'
    // let regex = new RegExp(`${str}\\b`, "g");
    // regex.test(string)
    
    // console.log('TERM BODY', req.body.term)
    // console.log('TERM QUERY', req.query.term) // this !
    // console.log('TERM PARAMS', req.params.term)