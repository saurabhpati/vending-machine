class Fifty {
    private value: number = 50;

    public get Value(): number {
        return this.value;
    }

    getImageUrl = (): string => {
        return 'img/50_INR.png';
    }

}