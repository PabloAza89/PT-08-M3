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
