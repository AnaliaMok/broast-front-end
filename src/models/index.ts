class BrewMethod {
  id!: number;
  title!: string;
  createdAt?: string;
  updatedAt?: string;

  // coffees: [Coffee!]
}

class Roaster {
  id!: number;
  name!: string;
  city!: string;
  state!: string;
  description?: string;
  funFact?: string;
  logo?: string;
  createdAt?: string;
  updatedAt?: string;

  // coffees: [Coffee!]
}

class FlavorProfile {
  id!: number;
  profileName!: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;

  // coffees: [Coffee!] @hasMany(type: "paginator")
}

class RoastLevel {
  id!: number;
  name!: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;

  // coffees: [Coffee!] @hasMany(type: "paginator")
}

class Coffee {
  id!: number;
  name!: string;
  description?: string;
  isSoldOut!: boolean;
  isSingleOrigin!: boolean;
  isAvailableGround!: boolean;
  isAvailableWhole!: boolean;
  isRetired!: boolean;
  bagInOunces!: number;
  pricePerBag!: number;
  maxQuantity!: number;

  createdAt?: string;
  updatedAt?: string;

  roaster?: Roaster;
  flavorProfile?: FlavorProfile;
  roastLevel?: RoastLevel;
  brewMethod?: BrewMethod;
}

export { BrewMethod, Roaster, FlavorProfile, RoastLevel, Coffee };
