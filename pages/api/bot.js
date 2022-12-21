async function bot(request, response) {
    const dynamicDate = new Date();
    // response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    response.json({
        updateDate: dynamicDate.toGMTString(),
        status: 'dispatched'
    });
}

export default bot;