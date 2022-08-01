export enum Map {
    Ancient = "ancient",
    Inferno = "inferno",
    Nuke = "nuke",
    Dust2 = "dust2",
    Mirage = "mirage",
    Vertigo = "vertigo",
    Overpass = "overpass"
}

export enum GrenadeTeam {
    None,
    Terrorist,
    CounterTerrorist
}

export enum Movement {
    W,
    A,
    S,
    D,
    Walk,
    Jump,
    LeftClickThrow,
    RightClickThrow,
    BothClickThrow,
    JumpThrow
}

interface BaseGrenade {
    team: GrenadeTeam;
    name: string;
    posImage: string;
    aimImage: string;
    throwGuide: Movement[];
    favorite: boolean;
}

// Grenade types:
export interface Smoke extends BaseGrenade {
    // Might need something here
}

export interface Flash extends BaseGrenade {
    // Might need something here
}

export interface Molotov extends BaseGrenade {
    // Might need something here
}

export interface Frag extends BaseGrenade {
    // Might need something here
}

export interface CounterStrikeGrenadeMap {
    map: Map;
    smokes: Smoke[];
    flashbangs: Flash[];
    molotovs: Molotov[];
    frags: Frag[];
}