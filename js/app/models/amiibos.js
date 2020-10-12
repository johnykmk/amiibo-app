define(function () {

    return function Amiibo(object) {

        this.amiiboSeries = object.amiiboSeries,
        this.character = object.character,
        this.gameSeries = object.gameSeries,
        this.image = object.image,
        this.name = object.name,
        this.release = object.release,
        this.tail = object.tail
    };
});