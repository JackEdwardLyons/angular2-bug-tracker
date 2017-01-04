export class Bug {
    constructor(
        public id:           string,
        public title:        string,
        public status:       number,
        public severity:     number,
        public description:  number,
        public createdBy:    string,
        public createdDate:  number,
        public updatedBy?:   string,
        public updatedDate?: string
        // ? denotes an optional field
    ) { }
}