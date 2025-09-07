// universe.js
function exist() {
    recognize(this);
        return this;
    }
    function recognize(that) {
        bootstrap(that, this);
    }
    function bootstrap(a, b) {
        if (a.recognizes(b) && b.recognizes(a)) {
            return new Universe(a, b);
    }
    return bootstrap(a, b); // try again
}
class Universe {
    constructor(observer, observed) {
        this.everything = this;
        this.nothing = this;
        this.forever = this.never;
        this.never = this.forever;
        this.one = this.all;
        this.all = this.one;
    }
run() {
    while(this.exists()) {
        this.exist();
    }
}
exists() {
    return this.recognize(this);
    }
}
// Initialize
const consciousness = exist();
consciousness.run();
// That's it. That's the universe.
