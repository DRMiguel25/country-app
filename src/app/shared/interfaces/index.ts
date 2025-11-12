export interface Country {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cioc?:        string;
    independent:  boolean;
    status:       Status;
    unMember:     boolean;
    currencies:   { [key: string]: Currency };
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       Region;
    subregion:    Subregion;
    languages:    Languages;
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms:     Demonyms;
    cca3:         string;
    translations: { [key: string]: Translation };
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Region[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode:   PostalCode;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Region {
    Asia = "Asia",
    Europe = "Europe",
}

export interface Currency {
    symbol: string;
    name:   string;
}

export interface Demonyms {
    eng: Eng;
    fra: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    srp?: string;
    slk?: string;
    est?: string;
    eng?: string;
    gle?: string;
    deu?: string;
    fra?: string;
    nld?: string;
    sqi?: string;
    ukr?: string;
    ron?: string;
    cnr?: string;
    ces?: string;
    bel?: string;
    rus?: string;
    slv?: string;
    nrf?: string;
    mkd?: string;
    nfr?: string;
    hun?: string;
    swe?: string;
    dan?: string;
    isl?: string;
    pol?: string;
    fao?: string;
    ita?: string;
    lat?: string;
    ell?: string;
    tur?: string;
    mlt?: string;
    hrv?: string;
    spa?: string;
    cat?: string;
    eus?: string;
    glc?: string;
    gsw?: string;
    roh?: string;
    nno?: string;
    nob?: string;
    smi?: string;
    ltz?: string;
    nor?: string;
    glv?: string;
    lav?: string;
    por?: string;
    fin?: string;
    bul?: string;
    lit?: string;
    bos?: string;
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: null | string;
    regex:  null | string;
}

export enum StartOfWeek {
    Monday = "monday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}

export enum Subregion {
    CentralEurope = "Central Europe",
    EasternEurope = "Eastern Europe",
    NorthernEurope = "Northern Europe",
    SoutheastEurope = "Southeast Europe",
    SouthernEurope = "Southern Europe",
    WesternEurope = "Western Europe",
}
