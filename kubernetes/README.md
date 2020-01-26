
# KubeInvaders

This brings the Kubernetes manifests up to date with the Helm chart manifests and wraps them with Kustomize for easier variable substitution and configuration.

1. Set variables in `source-vars.yaml`
  - `MY_NAMESPACE` - the namespace into which the KubeInvaders app will be installed
  - `TARGET_NAMESPACE` - the namespace (or a comma-joined list of namespaces) whose Pods will be targeted for destruction
  - `ROUTE_HOST` - the hostname for the ingress to access the destruction panel
2. Set additional variables in `config.txt` if necessary
    - See [the docs](https://github.com/oskapt/KubeInvaders#environment-variables---make-the-game-more-difficult-to-win) for more information
3. Set `namespace` key in `kustomization.yaml` to the same value as `MY_NAMESPACE`
  - This is because Kustomize requires a namespace in `kustomization.yaml`, and we can't set it dynamically.
4. Run `kubectl apply -k base` from within this directory to apply all manifests to the cluster.

Once everything launches, you can visit `https://${ROUTE_HOST}` in a browser to start the game!

## Caveats

### Why doesn't this include TLS?

The original manifests included a configuration for TLS that didn't work at all. If your ingress controller has a default certificate, it will be assigned to this Ingress. You can accept the certificate warning when you visit the site.

If you prefer to issue a cert for ROUTE_HOST, then you can modify `ingress.yaml` to use it.