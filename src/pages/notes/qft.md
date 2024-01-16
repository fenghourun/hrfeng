# Quantum Field Theory

Solutions to the end of chapter problems in the standard text 'Introduction to Quantum Field Theory' by Peskin & Schroeder. 
I will be adding to this as I work through the text.

## Problems

### 3.1 Lorentz group

Recall from Eq. (3.17) the Lorentz commutation relations
$$
  [ J^{\mu \nu}, J^{\rho \sigma}] = i(g^{\nu \rho} J^{\mu \sigma} - g^{\mu \rho} J^{\nu \sigma} - g^{\nu \sigma}J^{\mu \rho} - g^{\mu \sigma} J^{\nu \rho})
$$

(a) Define the generators of rotations and boosts as 
$$
  L^i = \frac{1}{2}\epsilon^{ijk}J^{jk}, \quad K^i = J^{0i}
$$
where $i, j, k = 1, 2, 3$. An infinitesimal Lorentz transformation can then be written
$$
  \Phi \rightarrow (1 - i \pmb{\theta}\cdot \pmb{L} - i \pmb{\beta} \cdot \pmb{K} ) \Phi
$$

Write the commutation relations of these vector operators explicitly. (For example, $[L^i, L^j] = i \epsilon^{ijk} L^k$). Show that the combinations
$$
  \pmb{J_+} = \frac{1}{2} (\pmb{L} + i \pmb{K}) \quad \text{and} \quad  \pmb{J_{-}} = \frac{1}{2} (\pmb{L} - i \pmb{K})
$$
commute with each other and seperately satisfy the commutation relations of angular momentum.


#### Solution

 Computing the commutation relations explicitly for the vector operators. Using the cyclic properties of the levi-civita symbol
$$
\begin{align}
  [L^i, L^j] 
  &= \frac{1}{4}\epsilon^{iab} \epsilon^{jcd}[J^{ab}, J^{cd}]  \\

  &= \frac{i}{4}\epsilon^{iab} \epsilon^{jcd} (g^{bc} J^{ad} - g^{ac} J^{bd} - g^{bd}J^{ac} - g^{ad} J^{bc}) \\
  &= \frac{i}{4}\epsilon^{iab}  (\epsilon^{jcd}g^{bc} J^{ad} -\epsilon^{jcd} g^{ac} J^{bd} -\epsilon^{jcd} g^{bd}J^{ac} -\epsilon^{jcd} g^{ad} J^{bc}) \\

  &= \frac{i}{4}\epsilon^{iab}  (\epsilon^{jcd}g^{bc} J^{ad} -\epsilon^{jcd} g^{ac} J^{bd} +\epsilon^{jcd} g^{bc}J^{ad} +\epsilon^{jcd} g^{ac} J^{bd}) \\
  &= \frac{i}{2}\epsilon^{iab}\epsilon^{jcd}g^{bc}J^{ad} \\ 
  &= -\frac{i}{2} \epsilon^{iab}\epsilon^{jcd}\delta^{bc}J^{ad} \\
  &= \frac{i}{2}\epsilon^{iab} \epsilon^{jdb} J^{ad} \\
  &= \frac{i}{2}( \delta^{ij} \delta^{ad} - \delta^{id} \delta^{ja} )J^{ad}  \\
  &= \frac{i}{2}(\delta^{ij}J^{dd} - J^{ji})
\end{align}
$$

Using the representation of the Lorentz generators given in (3.18)
$$
  (J^{\mu \nu})_{\alpha \beta} = i(\delta^\mu_{\,\alpha} \delta^\nu_{\,\beta} - \delta^\nu_{\,\beta} \delta^\nu_{\,\alpha})
$$

the first term in the last equality resolves to
$$
  [L^i, L^j]  = \frac{i}{2}J^{ij} = i\epsilon^{ijk}L^{k}
$$
and the second term we used
$$
\begin{align}
  \epsilon^{ijk}L^k &= \frac{1}{2} \epsilon^{ijk} \epsilon^{klm}J^{lm} \\
  &= \frac{1}{2} ( \delta^{il}\delta^{jm} - \delta^{im}\delta^{jl})J^{lm} \\
  &= \frac{1}{2} ( J^{ij} - J^{ji}) \\
  & = \frac{1}{2}(J^{ij} + J^{ij}) = J^{ij}

\end{align}
$$

Similarly for the boost generators
$$
\begin{align}
  [K^i, K^j] &= [J^{0i}, J^{0j}] \\
  &= i(g^{i0} J^{0j} - g^{00} J^{ij} - g^{ij}J^{00} - g^{0j} J^{i0}) \\
  &= i(0 - J^{ij} +0 - 0) = -iJ^{ij}\\
  &= -i \epsilon^{ijk}L^k
\end{align}
$$

Now we have to show the expressions for $\pmb{J_+}$ and $\pmb{J_-}$ commute with each other

$$
\begin{align}
  [J_+, J_-] &= \frac{1}{4} [ \pmb{L} + i\pmb{K}, \pmb{L} - i\pmb{K}] \\
  &= \frac{1}{4}[\pmb{L}^2 - i\pmb{LK} + i\pmb{KL} + \pmb{K}^2 - (\pmb{L}^2+ i\pmb{KL} - i\pmb{LK} + \pmb{K}^2)] \\
  &= 0
\end{align}
$$

Finally we need to compute the commutation relations of $J_{\pm}^i$. First compute
$$
\begin{align}
  [L^i, K^j] &= \frac{1}{2}\epsilon^{ilm}[J^{lm}, J^{0j}] \\
  &= \frac{i}{2}\epsilon^{ilm} (g^{m0} J^{lj} - g^{l0} J^{mj} - g^{mj}J^{l0} - g^{lj} J^{m0}) \\
  &= \frac{i}{2} \epsilon^{ilm}( 0 - 0 - \delta^{mj}J^{l0} - \delta^{lj}J^{m0}) \\
  &= -\frac{i}{2} (\epsilon^{ilj}J^{l0} + \epsilon^{ijm}J^{m0}) 
\end{align}
$$
$$
\begin{align}
  [J_\pm^i, J_\pm^j] &= \frac{1}{4}[L^i \pm iK^i, L^j \pm iK^j] \\
  &= \frac{1}{4}([L^i, L^j] \pm [L^i, iK^j] \pm [iK^i, L^j] - [K^i, K^j]) \\
  &= \frac{1}{4}(i\epsilon^{ijk}L^k + i\epsilon^{ijk}L^k)\\
  &= \frac{i}{2} \epsilon^{ijk}L^k
\end{align}
$$