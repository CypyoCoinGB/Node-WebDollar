import InterfaceBlockchainProtocol from "common/blockchain/interface-blockchain/protocol/Interface-Blockchain-Protocol"
import PPoWBlockchainProofPi from "./../blockchain/prover/PPoW-Blockchain-Prover"

class PPoWBlockchainProtocol extends InterfaceBlockchainProtocol{

    _initializeNewSocket(nodesListObject) {

        InterfaceBlockchainProtocol.prototype._initializeNewSocket.call(this, nodesListObject);

        let socket = nodesListObject.socket;

        this._initializeNodeNiPoPoW(socket);

    }

    _initializeNodeNiPoPoW(socket){

        socket.node.on("get/nipopow-blockchain/headers/get-proofs/pi", async ()=>{

            socket.node.sendRequest("get/nipopow-blockchain/headers/get-proofs/pi"+"/answer", this.blockchain.prover.proofPi.getProofHeaders() );

        });

        socket.node.on("get/nipopow-blockchain/headers/get-proofs/xi", async ()=>{

            socket.node.sendRequest("get/nipopow-blockchain/headers/get-proofs/xi"+"/answer", this.blockchain.prover.proofXi.getProofHeaders() );

        });

    }

}


export default PPoWBlockchainProtocol;