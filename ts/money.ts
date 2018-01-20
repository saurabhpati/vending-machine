abstract class Money {

    /**
     * The protected constructor for the abstract class Money.
     */
    protected constructor(public value: number) {

    }

    public abstract getImageUrl();
}

class Fifty extends Money {
    /**
     * The public constructor to initialize the Fifty class.
     */
    public constructor() {
        super(50);
    }

    public getImageUrl(): string {
        return 'img/50_INR.png';
    }
    
}

class Twenty extends Money {
    /**
     * The public constructor to initialize the Twenty class.
     */
    public constructor() {
        super(20);
    }
    
    public getImageUrl(): string {
        return 'img/20_INR.png';
    }
}

class Ten extends Money {
    /**
     * The public constructor to initialize the Ten class.
     */
    public constructor() {
        super(10);
    }
    
    public getImageUrl() : string {
        return 'img/10_INR.png';
    }
}