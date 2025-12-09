// src/components/3d/PhoneModel.jsx
/*
  Auto-generated base by: https://github.com/pmndrs/gltfjsx
  Modified to render a custom texture on the phone screen.
*/

import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

export default function PhoneModel(props) {
  // Make sure this path matches where phone.glb actually lives in /public
  // If your file is in public/phone.glb, change to '/phone.glb'
  const { nodes, materials } = useGLTF('/models/phone.glb');
  const screenTexture = useTexture('/textures/Landing-Screen-Phone.png');
  screenTexture.flipY = false;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.aAftszMZbNEMhoe001.geometry}
        material={materials.jKYrqbVsPDbEaqj}
        position={[-0.025, 0.044, -0.015]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.abBhkuHIWeWxdnv.geometry}
        material={materials.YVjGRIfwSbFphGH}
        position={[0.007, 0.07, -0.005]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AepdVkPZeAmapGK.geometry}
        material={materials.iAKEWdNafBldSCV}
        position={[0.039, -0.033, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AGRAGZgDdQiqAwv001.geometry}
        material={materials.LqxrKBoiOXSOFqs}
        position={[0, -0.004, -0.005]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bWNFUbSszjChSpE001.geometry}
        material={materials.uFgsppDNoPNkBqW}
        position={[0.007, 0.054, -0.017]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BwYqVlkQuMdREsr.geometry}
        material={materials.vUNWrAqjHCArnzh}
        position={[0.025, 0.064, -0.015]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cTzAYNMxyxGrXkR.geometry}
        material={materials.nwfiSfJrPZRLBAj}
        position={[0, -0.08, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CUXydfOmpZTOIwn001.geometry}
        material={materials.uFgsppDNoPNkBqW}
        position={[-0.025, 0.044, -0.014]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dlfOvjAvSNEnzpf001.geometry}
        material={materials.SLmJkLdkhbbuEfG}
        position={[0.025, 0.045, -0.017]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DUMhFmRQRtYyIsa.geometry}
        material={materials.EOPlztmjOhyFwUF}
        position={[0.007, 0.07, -0.005]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eKXwwuvnxDrqUCv.geometry}
        material={materials.ybSvSfarxzoBKlb}
        position={[-0.025, 0.054, -0.014]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EPzOBwSqqcogiwK001.geometry}
        material={materials.vUNWrAqjHCArnzh}
        position={[0.007, 0.07, -0.005]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fbdwSPZAhafRoVX001.geometry}
        material={materials.EiHyBykxPjKZBgf}
        position={[-0.025, 0.064, -0.015]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FcKPMmFYyTgIxkR.geometry}
        material={materials.SLmJkLdkhbbuEfG}
        position={[0.025, 0.064, -0.017]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FegzLCaANkYSjhw.geometry}
        material={materials.vUNWrAqjHCArnzh}
        position={[0.025, 0.045, -0.014]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fWLoYzYzArWJkEs.geometry}
        material={materials.uFgsppDNoPNkBqW}
        position={[0.007, 0.07, -0.005]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gCMlCSdRJrizepS.geometry}
        material={materials.SMUhrjUPCjJkPUK}
        position={[0, -0.026, -0.013]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gpNYXfBgCggjIbD001.geometry}
        material={materials.LqxrKBoiOXSOFqs}
        position={[0.015, 0.07, -0.005]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gucycQBzeMjlWnc.geometry}
        material={materials.vUNWrAqjHCArnzh}
        position={[0.025, 0.045, -0.016]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hdubzDKKYvrSSSW.geometry}
        material={materials.uFgsppDNoPNkBqW}
        position={[0.025, 0.045, -0.014]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HEpFadyGgDnvrsX001.geometry}
        material={materials.uFgsppDNoPNkBqW}
        position={[0, -0.08, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hghphNGYoiYXKSv.geometry}
        material={materials.uFgsppDNoPNkBqW}
        position={[0.025, 0.064, -0.014]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />

      
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HkNSnYzBPABcqwM001.geometry}
        position={[0, 0.0015, -0.005]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      >
        <meshBasicMaterial map={screenTexture} toneMapped={false}/>
      </mesh>
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HyENgPuODCHFvcE001.geometry}
        material={materials.uFgsppDNoPNkBqW}
        position={[-0.025, 0.054, -0.014]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.iFmtcpQJRoqvVtP.geometry}
        material={materials.uFgsppDNoPNkBqW}
        position={[0.025, 0.064, -0.017]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.iiaJouajajQCUNT.geometry}
        material={materials.SLmJkLdkhbbuEfG}
        position={[0, -0.001, -0.01]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.iQKdKnqnDYUsYJz.geometry}
        material={materials.hiWLrxfkqoGxruc}
        position={[0, -0.085, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.IvdeSiYDweqsnZm001.geometry}
        material={materials.nwfiSfJrPZRLBAj}
        position={[0, -0.079, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.iZDNdcKAFcuEfFc001.geometry}
        material={materials.NUlImpGytyodpBy}
        position={[0.025, 0.064, -0.015]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kcFXUCVebfKtSVh.geometry}
        material={materials.ieDmCkHnOnSIOcm}
        position={[-0.001, 0.07, -0.005]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KUfjtwUmEyDNVXZ.geometry}
        material={materials.edDerJJLuuabITp}
        position={[0, -0.08, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KwGbUIcVQHqwxOo001.geometry}
        material={materials.edDerJJLuuabITp}
        position={[0, -0.079, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lAVJNLotEOnEKjC001.geometry}
        material={materials.UiBplfShRNPzcmF}
        position={[-0.025, 0.064, -0.015]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LLPSOlzuFgdAHGd001.geometry}
        material={materials.uFgsppDNoPNkBqW}
        position={[0.025, 0.048, -0.017]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LnrCtdgEqGwpDEs.geometry}
        material={materials.CVcxUAKakDuRdCf}
        position={[0.007, 0.07, -0.005]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lqtBOuVuGZSmIKO.geometry}
        material={materials.JKTmNomFyvfvVAj}
        position={[0.007, 0.054, -0.017]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LvSiRAJgYXMPgYk.geometry}
        material={materials.AYSuIKiLIvlGvvQ}
        position={[0.025, 0.064, -0.016]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lwfmQebmsqyrPXh.geometry}
        material={materials.sJxAokqqlZYuwzy}
        position={[0, 0.045, -0.013]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LXcFmsoszzDyTrR.geometry}
        material={materials.ooxVuxObmmqIeuh}
        position={[0.039, -0.033, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MurNHnRHsVHWaxp.geometry}
        material={materials.SLmJkLdkhbbuEfG}
        position={[-0.039, 0.044, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NfdueRaYqzGELQN001.geometry}
        material={materials.nypJRzXNHbmJCqR}
        position={[0.025, 0.064, -0.017]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.nkejtxZPZMUnCYr001.geometry}
        material={materials.vUNWrAqjHCArnzh}
        position={[0.025, 0.064, -0.016]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.nsOllonHmAArGzD.geometry}
        material={materials.vUNWrAqjHCArnzh}
        position={[0.007, 0.054, -0.016]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.oKryyXghVaYcnxt.geometry}
        material={materials.SLmJkLdkhbbuEfG}
        position={[0.039, 0.023, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.OKxkTkuhCyxGhZE001.geometry}
        material={materials.VXTclbUnoLmmPoD}
        position={[0, -0.084, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.OVqomEMzWqyRLyn.geometry}
        material={materials.AYSuIKiLIvlGvvQ}
        position={[0.025, 0.045, -0.016]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.OXoCgzLWQYAQquU001.geometry}
        material={materials.nypJRzXNHbmJCqR}
        position={[0.007, 0.054, -0.018]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PHWKwDZnTREMYuI001.geometry}
        material={materials.NUlImpGytyodpBy}
        position={[0.007, 0.054, -0.016]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pJRQKDwCsreIOlZ.geometry}
        material={materials.JKTmNomFyvfvVAj}
        position={[0.025, 0.064, -0.017]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PjXKYqLWQECXPUd001.geometry}
        material={materials.uFgsppDNoPNkBqW}
        position={[0.025, 0.064, -0.016]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pPfvBmJoSbStZtX001.geometry}
        material={materials.uFgsppDNoPNkBqW}
        position={[0.007, 0.054, -0.014]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.QadnjIWVMhZXiTR.geometry}
        material={materials.uFgsppDNoPNkBqW}
        position={[0.003, 0.009, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.qIpThkQkOPtihXV.geometry}
        material={materials.vUNWrAqjHCArnzh}
        position={[0.025, 0.064, -0.016]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.QndSmERADslDLLp.geometry}
        material={materials.YQFhPSFSryEqJMp}
        position={[0, -0.084, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.QrifvpLHKFTTEsa.geometry}
        material={materials.vUNWrAqjHCArnzh}
        position={[0.025, 0.045, -0.014]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rGBwAZqKCRwHJRN.geometry}
        material={materials.sJxAokqqlZYuwzy}
        position={[0, 0.078, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RhBESHcBbtHIQyo001.geometry}
        material={materials.nwfiSfJrPZRLBAj}
        position={[0, -0.082, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rrEEeCyzzfvqwIm.geometry}
        material={materials.YQFhPSFSryEqJMp}
        position={[0, -0.085, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sDrQkCDINonvXWK.geometry}
        material={materials.AYSuIKiLIvlGvvQ}
        position={[0.007, 0.054, -0.016]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SpxFcMfkxdvIFUi001.geometry}
        material={materials.hqDUrVMlYhzYusu}
        position={[-0.025, 0.064, -0.016]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sPzwKNuTuRdmZwe001.geometry}
        material={materials.JKTmNomFyvfvVAj}
        position={[0.025, 0.045, -0.017]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SRAnKQnxTzzZwap001.geometry}
        material={materials.nypJRzXNHbmJCqR}
        position={[0.025, 0.045, -0.017]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SRHCjsrOCyJnNJF001.geometry}
        material={materials.uFgsppDNoPNkBqW}
        position={[0.007, 0.054, -0.016]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tpKxrouqvFhpDNb.geometry}
        position={[0, 0.002, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TqzMEiskVyWdFvm.geometry}
        material={materials.yPEFElLJTRhfWfw}
        position={[0, -0.024, -0.013]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.txrfsibKZozkTYh.geometry}
        material={materials.YQFhPSFSryEqJMp}
        position={[0, -0.085, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.UduOrBpYBvdbGKN001.geometry}
        material={materials.SLmJkLdkhbbuEfG}
        position={[0.007, 0.054, -0.017]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.uPJJfDjsnCmUqMb001.geometry}
        material={materials.QEOvfSZiwySWiUk}
        position={[-0.025, 0.064, -0.015]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.VAAxcOWnKYsQZew001.geometry}
        material={materials.PJgHvfOhNXkxvzq}
        position={[0.039, -0.033, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vDwikmBvgqpSImF001.geometry}
        material={materials.SMUhrjUPCjJkPUK}
        position={[0, -0.026, -0.013]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vmIWkrgpdvorqPu.geometry}
        material={materials.awYxKfiOpRgQIxD}
        position={[0, -0.025, -0.013]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.VOwOyTIgUdFOGSH001.geometry}
        material={materials.SLmJkLdkhbbuEfG}
        position={[-0.039, 0.16 - 0.144, -0.009]} // same as before, just formatted
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.VQJvjrUDkUerjps.geometry}
        material={materials.edDerJJLuuabITp}
        position={[0, -0.081, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WaSQjvRMKxQhvQe.geometry}
        material={materials.vUNWrAqjHCArnzh}
        position={[0.007, 0.07, -0.005]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wJjzGrVrAsJPEUm.geometry}
        material={materials.hiWLrxfkqoGxruc}
        position={[0, -0.085, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WOjLDhAMoKnWjRh001.geometry}
        material={materials.vUNWrAqjHCArnzh}
        position={[0.007, 0.054, -0.016]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WrVlZlHzKteWiwK.geometry}
        material={materials.HETovHCBsEjcSiP}
        position={[0, -0.084, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.XMqdcXhDiFUsJct001.geometry}
        material={materials.AYSuIKiLIvlGvvQ}
        position={[0.025, 0.064, -0.016]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.XzQQIMeXTQrDuOE.geometry}
        material={materials.NUlImpGytyodpBy}
        position={[0.025, 0.045, -0.014]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.YMhcZuJreIkCuNy001.geometry}
        material={materials.SLmJkLdkhbbuEfG}
        position={[-0.039, 0.03, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.yTmdRacfvebHTTS.geometry}
        material={materials.nwfiSfJrPZRLBAj}
        position={[0, -0.081, -0.009]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ZfPoPnUTDmjoFQo.geometry}
        material={materials.AYSuIKiLIvlGvvQ}
        position={[0.025, 0.045, -0.014]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ZlrVlZDcyrymzYf.geometry}
        material={materials.uFgsppDNoPNkBqW}
        position={[0.025, 0.045, -0.015]}
        rotation={[Math.PI, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload('/models/phone.glb');
