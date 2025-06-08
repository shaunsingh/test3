{ mkBunDerivation, ... }:
mkBunDerivation {
  pname = "site-react";
  version = "1.0.0";

  src = ./.;

  bunNix = ./bun.nix;

  buildPhase = ''
    bun run build \
      --minify
  '';

  installPhase = ''
    mkdir -p $out/dist

    cp -R ./dist $out
  '';
}
