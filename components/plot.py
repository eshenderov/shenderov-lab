import numpy as np
import matplotlib.pyplot as plt

# Parameters
t = np.linspace(0, 10, 500)
E_hbar = 2.0  # Represents Energy / h-bar (frequency)

# Calculate Real and Imaginary parts
real_part = np.cos(E_hbar * t)
imag_part = np.sin(E_hbar * t)

# Create 3D Plot
fig = plt.figure(figsize=(10, 7))
ax = fig.add_subplot(111, projection='3d')

# Plot the "Corkscrew"
ax.plot(t, real_part, imag_part, label='Wave Function $\Psi(t)$', color='blue')

# Labeling
ax.set_xlabel('Time (t)')
ax.set_ylabel('Real part')
ax.set_zlabel('Imaginary part')
ax.set_title('Quantum State Rotation over Time')

plt.show()