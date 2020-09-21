# AWS CDK -> WhyFabric

#### Build

```console
$ yarn gen
$ yarn install -L
$ yarn build
```

#### Synthesize the CDK into a k8s template

```console
$ yarn synth
```

#### Apply the k8s template to your cluster

```console
$ kubectl apply -f dist/webserviceexample.k8s.yaml
```
