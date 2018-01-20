abstract class ProductCategory {
    /**
     * The protected constructor for the abstract ProductCategory class.
     */
    protected constructor(public name: string) {

    }

    public abstract getImageUrl(): string
}


class SodaCategory extends ProductCategory {
    /**
     * The public constructor to initialize SodaCategory class.
     */
    public constructor() {
        super('Soda');
    }

    public getImageUrl(): string {
        return 'img/SodaCan.png';
    }
}

class CandyBarCategory extends ProductCategory {
    public constructor() {
        super('Candy bar')
    }
    
    public getImageUrl(): string {
        return 'img/CandyBar.png';
    }
}

class CandyCategory extends ProductCategory {
    public constructor() {
        super('Candy');
    }
    
    public getImageUrl(): string {
        return 'img/Candy.png';
    }
}

class ChipsCategory extends ProductCategory {
    public constructor() {
        super('Chips');
    }

    public getImageUrl(): string {
        return 'img/Chips.png';
    }
}

class NutsCategory extends ProductCategory {
    public constructor() {
        super('Nuts');
    }

    public getImageUrl(): string {
        return 'img/Nuts.png';
    }
}