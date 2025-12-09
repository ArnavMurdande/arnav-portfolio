// src/components/3d/LaptopModel.jsx
import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export default function LaptopModel({ screenTexture, ...props }) {
  const { nodes, materials } = useGLTF('/models/laptop.glb');

  // Metallic surface tuning
  useEffect(() => {
    Object.values(materials).forEach((mat) => {
      if (!mat) return;
      mat.metalness = 0.85;
      mat.roughness = 0.25;
      mat.envMapIntensity = 1.5;
      mat.clearcoat = 0.8;
      mat.clearcoatRoughness = 0.1;
    });
  }, [materials]);

  return (
    <group {...props} dispose={null}>
      {/* Laptop geometry group */}
      <group
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.3}
        position={[0, -2, 0]}
      >
        <mesh castShadow receiveShadow geometry={nodes.rFquJMQWzuecHQa.geometry} material={materials.gGmExFByNnyrwMm} />
        <mesh castShadow receiveShadow geometry={nodes.AQdtiiJfiakvCKx.geometry} material={materials.zNRfbdNyoCOxSDD} />
        <mesh castShadow receiveShadow geometry={nodes.cdsXAgNBwwCPrIE.geometry} material={materials.HdeQgqDhVRltuvQ} />
        <mesh castShadow receiveShadow geometry={nodes.UcEDhfwzyyGMEfj.geometry} material={materials.HdeQgqDhVRltuvQ} />
        <mesh castShadow receiveShadow geometry={nodes.DmUcWNXfiLPcftc.geometry} material={materials.MTVWTmEddByGzeA} />
        <mesh castShadow receiveShadow geometry={nodes.ELAWKPIQpGuqYuU.geometry} material={materials.gGmExFByNnyrwMm} />
        <mesh castShadow receiveShadow geometry={nodes.FmsrGmNZGtSredn.geometry} material={materials.GdPtFLZURIXFHzu} />
        <mesh castShadow receiveShadow geometry={nodes.jbtMEbemwaBHRTw.geometry} material={materials.cFRLiGCORrjAihr} />
        <mesh castShadow receiveShadow geometry={nodes.jfSniDGKVWZvpyG.geometry} material={materials.MTVWTmEddByGzeA} />
        <mesh castShadow receiveShadow geometry={nodes.lZDBMTdjXPebUMa.geometry} material={materials.TMkvtqywJDMvuJf} />
        <mesh castShadow receiveShadow geometry={nodes.ZroMGzfQtHrkgUh.geometry} material={materials.jgUGvZiSIPFNFGe} />
        <mesh castShadow receiveShadow geometry={nodes.bckGBpxpLXNHmCa.geometry} material={materials.GzMrvkTsmRxvOJz} />
        <mesh castShadow receiveShadow geometry={nodes.JXvTyELxHLGtnWp.geometry} material={materials.IqdrVPEOaZqbHHo} />
        <mesh castShadow receiveShadow geometry={nodes.cpUmMDYlGqLEAMt.geometry} material={materials.gGmExFByNnyrwMm} />
        <mesh castShadow receiveShadow geometry={nodes.sIzFavpnYbDfLWk.geometry} material={materials.IqdrVPEOaZqbHHo} />
        <mesh castShadow receiveShadow geometry={nodes.sonZrhRIQDlQHcy.geometry} material={materials.HzlgDKVNnMxfNgM} />
        <mesh castShadow receiveShadow geometry={nodes.IJeReHnhQHJFtgB.geometry} material={materials.xEcnbqMzoZoLkIZ} />
        <mesh castShadow receiveShadow geometry={nodes.lzNeOaWQWAReGok.geometry} material={materials.XvtJEVWVvyDeJRR} />
        <mesh castShadow receiveShadow geometry={nodes.WZqbfOdYdlPMpRs.geometry} material={materials.XvtJEVWVvyDeJRR} />
        <mesh castShadow receiveShadow geometry={nodes.aBJxhjUzVIkBmJN.geometry} material={materials.vJOGifqMXcmlCkF} />
        <mesh castShadow receiveShadow geometry={nodes.mTDvrHXNRqkIrBd.geometry} material={materials.XvtJEVWVvyDeJRR} />
        <mesh castShadow receiveShadow geometry={nodes.fVNvUQeYMdbMNOA.geometry} material={materials.ItKEDAaOJloGKSH} />
        <mesh castShadow receiveShadow geometry={nodes.CFihWZPNFpzuzyX.geometry} material={materials.YMmdfGRsPviDXYd} />
        <mesh castShadow receiveShadow geometry={nodes.qbFEMXRbwPWbFTN.geometry} material={materials.HdeQgqDhVRltuvQ} />
        <mesh castShadow receiveShadow geometry={nodes.WzbwnVztmigkRgn.geometry} material={materials.WiyOPYJEeiHNVjF} />
        <mesh castShadow receiveShadow geometry={nodes.bzDyZTvUFAEJLcq.geometry} material={materials.kMkIQgtfAZdmtyc} />
        <mesh castShadow receiveShadow geometry={nodes.dAVNlHAHYLbkxrB.geometry} material={materials.sqkqSXQCeccDMmm} />
        <mesh castShadow receiveShadow geometry={nodes.EBRhBFNqcMTaWWv.geometry} material={materials.utAQarMJnpKrQeb} />
        <mesh castShadow receiveShadow geometry={nodes.LsmCMkPRBVEEGpg.geometry} material={materials.waAAeDqzqDLObIi} />
        <mesh castShadow receiveShadow geometry={nodes.wyClPAIazRlKQnt.geometry} material={materials.quuXrfeUujYrUMo} />
        <mesh castShadow receiveShadow geometry={nodes.QSjoCOCzvxPnLpK.geometry} material={materials.gGmExFByNnyrwMm} />
        <mesh castShadow receiveShadow geometry={nodes.eFpSjyrDhTgtyuf.geometry} material={materials.KtCwfhzYtafEPLg} />
        <mesh castShadow receiveShadow geometry={nodes.LBeBZdkKmrJVhJd.geometry} material={materials.gGmExFByNnyrwMm} />
        <mesh castShadow receiveShadow geometry={nodes.MwJmMcLbTBwQpxl.geometry} material={materials.uHOYziIuFeQJbIX} />
        <mesh castShadow receiveShadow geometry={nodes.OCxZAMeEkQKexHA.geometry} material={materials.gGmExFByNnyrwMm} />
        <mesh castShadow receiveShadow geometry={nodes.XodVrcYKiUPGCmX.geometry} material={materials.DthpMXUDOFLFvyk} />
        <mesh castShadow receiveShadow geometry={nodes.JNlPAPsywCtwJrd.geometry} material={materials.vJOGifqMXcmlCkF} />
        <mesh castShadow receiveShadow geometry={nodes.KjpcUkkMjGYeXkV.geometry} material={materials.HdeQgqDhVRltuvQ} />
        <mesh castShadow receiveShadow geometry={nodes.UEFeUEhkJPdlgXF.geometry} material={materials.IqdrVPEOaZqbHHo} />
        <mesh castShadow receiveShadow geometry={nodes.xiLiwJHfkqIwaTs.geometry} material={materials.pKaDkdyuuvylYHt} />
        <mesh castShadow receiveShadow geometry={nodes.LQtuXuSGFKsUXjP.geometry} material={materials.gGmExFByNnyrwMm} />
        <mesh castShadow receiveShadow geometry={nodes.nAIWMiVEtSYdjdZ.geometry} material={materials.ZtrFkpzRROyZncn} />

        {/* SCREEN MESH: renders your landing screenshot */}
        <mesh castShadow receiveShadow geometry={nodes.tfTbkkzhxqpKRgC.geometry}>
          <meshBasicMaterial map={screenTexture} toneMapped={false} />
        </mesh>

        <mesh castShadow receiveShadow geometry={nodes.WyuoVWKMOcOlXJM.geometry} material={materials.IqdrVPEOaZqbHHo} />
      </group>
    </group>
  );
}

useGLTF.preload('/models/laptop.glb');