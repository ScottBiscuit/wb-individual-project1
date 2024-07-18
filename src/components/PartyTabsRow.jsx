import axios from "axios";
import { useState } from "react";
import { Row, Col, Stack } from "react-bootstrap";
import EditableRowModeButtons from "./EditableRowModeButtons";
import EditableNameCell from "./EditableNameCell";
import EditableRaceCell from "./EditableRaceCell";
import EditableClassCell from "./EditableClassCell";
import EditableLevelCell from "./EditableLevelCell";

export default function PartyTabsRow({ initialPCData, initialIsEditing, onDeleteRow }){
    const [isEditing, setIsEditing] = useState(initialIsEditing);
    
    const [pcImg, setPCImg] = useState(initialPCData.pcImg);
    const [pcName, setPCName] = useState(initialPCData.pcName);
    const [pcRace, setPCRace] = useState(initialPCData.pcRace);
    const [pcClass, setPCClass] = useState(initialPCData.pcClass);
    const [pcLevel, setPCLevel] = useState(initialPCData.pcLevel)

    const setEditMode = () => setIsEditing(true);
    const setNormalMode = async () => {
        const { data } = await axios.put(`/api/party/${initialPCData.pcId}`, {
            pcImg,
            pcName,
            pcRace,
            pcClass,
            pcLevel,
        });
        if (!data.error) {
            setPCImg(data.pcImg);
            setPCName(data.pcName);
            setPCRace(data.pcRace);
            setPCClass(data.pcClass);
            setPCLevel(data.pcLevel);
        }
        setIsEditing(false);
    };

  return (
    <Row>
{/*     TODO change image
        <EditableImageCell 
        value={pcImg} 
        isEditing={isEditing}
        onValueChange={setPCImg} 
        /> */}
       
        <Col xs={{ span: 2 }}>
            <img src='./images/cawlin.png' width='100px'/>
        </Col>
        <Col xs={{ span: 2 }}>
            <Stack gap={0}>
                <div className="p-2">Name:</div>
                <div className="p-2">Race:</div>
                <div className="p-2">Class:</div>
                <div className="p-2">Level:</div>
            </Stack>
        </Col>
        <Col xs={{ span: 7 }}>
            <Stack gap={0}>
                <EditableNameCell value={pcName} isEditing={isEditing} onValueChange={setPCName} />
                <EditableRaceCell value={pcRace} isEditing={isEditing} onValueChange={setPCRace} />
                <EditableClassCell value={pcClass} isEditing={isEditing} onValueChange={setPCClass} />
                <EditableLevelCell value={pcLevel} isEditing={isEditing} onValueChange={setPCLevel} />
            </Stack>
        </Col>
        <Col xs={{ span: 1 }}>
            <EditableRowModeButtons isEditing={isEditing} onEditClick={setEditMode} onDeleteClick={onDeleteRow} onSaveClick={setNormalMode} />
        </Col>
    </Row>
  );
}

                // <Row>
                //     <Col xs={{ span: 2 }}>
                //         <img src='./images/beast_boy.jpeg' width='100px'/>
                //     </Col>
                //     <Col xs={{ span: 2 }}>
                //         <Stack gap={0}>
                //             <div className="p-2">Name:</div>
                //             <div className="p-2">Race:</div>
                //             <div className="p-2">Class:</div>
                //         </Stack>
                //     </Col>
                //     <Col xs={{ span: 7 }}>
                //         <Stack gap={0}>
                //             <div className="p-2">Garfield Beast Boy Logan</div>
                //             <div className="p-2">Goblin</div>
                //             <div className="p-2">Druid - Moon 7</div>
                //         </Stack>
                //     </Col>
                //     <Col xs={{ span: 1 }}>Edit</Col>
                // </Row>
                // <Row>
                //     <Col xs={{ span: 2 }}>
                //         <img src='./images/bender_rodriguez.png' width='100px'/>
                //     </Col>
                //     <Col xs={{ span: 2 }}>
                //         <Stack gap={0}>
                //             <div className="p-2">Name:</div>
                //             <div className="p-2">Race:</div>
                //             <div className="p-2">Class:</div>
                //         </Stack>
                //     </Col>
                //     <Col xs={{ span: 7 }}>
                //         <Stack gap={0}>
                //             <div className="p-2">Bender Rodriguez</div>
                //             <div className="p-2">Warforged</div>
                //             <div className="p-2">Artificer - Armorer 7</div>
                //         </Stack>
                //     </Col>
                //     <Col xs={{ span: 1 }}>Edit</Col>
                // </Row>
                // <Row>
                //     <Col xs={{ span: 2 }}>
                //         <img src='./images/ahsoka_tano.jpeg' width='100px'/>
                //     </Col>
                //     <Col xs={{ span: 2 }}>
                //         <Stack gap={0}>
                //             <div className="p-2">Name:</div>
                //             <div className="p-2">Race:</div>
                //             <div className="p-2">Class:</div>
                //         </Stack>
                //     </Col>
                //     <Col xs={{ span: 7 }}>
                //         <Stack gap={0}>
                //             <div className="p-2">Ahsoka Tano</div>
                //             <div className="p-2">Hobgoblin</div>
                //             <div className="p-2">Fighter - Psi Warrior 7</div>
                //         </Stack>
                //     </Col>
                //     <Col xs={{ span: 1 }}>Edit</Col>
                // </Row>