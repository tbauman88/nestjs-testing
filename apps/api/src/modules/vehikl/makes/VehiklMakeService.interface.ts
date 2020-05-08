import { Makes } from "./VehiklMakeProviders";

/**
 * The goal of this repository is to demonstrate dynamic service providers that abstract the
 * "how" data is acquired or it's actual shape and allows for a single controller and service entrypoint with a consistent output.
 */
export interface ExpectedTeamMemberShape {
  name: string;
  office: Makes;
}

export interface VehiklMakeService {
  getVehikls: () => ExpectedTeamMemberShape[];
}
