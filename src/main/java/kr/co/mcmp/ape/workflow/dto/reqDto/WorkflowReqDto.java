package kr.co.mcmp.ape.workflow.dto.reqDto;

import kr.co.mcmp.ape.workflow.Entity.Workflow;
import kr.co.mcmp.ape.workflow.Entity.WorkflowParam;
import kr.co.mcmp.ape.workflow.Entity.WorkflowStageMapping;
import kr.co.mcmp.ape.workflow.dto.entityMappingDto.WorkflowDto;
import kr.co.mcmp.ape.workflow.dto.entityMappingDto.WorkflowParamDto;
import kr.co.mcmp.ape.workflow.dto.entityMappingDto.WorkflowStageMappingDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;
import java.util.stream.Collectors;

@SuperBuilder
@Getter
@NoArgsConstructor // 기본 생성자 추가
public class WorkflowReqDto {
    private WorkflowDto workflowInfo;
    private List<WorkflowParamDto> workflowParams;
    private List<WorkflowStageMappingDto> workflowStageMappings;

    // from : 외부 (entity -> dto)
    public static WorkflowReqDto from(Workflow workflow, List<WorkflowParam> workflowParams, List<WorkflowStageMapping> workflowStageMappings) {
        return WorkflowReqDto.builder()
                .workflowInfo            (WorkflowDto.from(workflow))
                .workflowParams         (workflowParams.stream().map(WorkflowParamDto::from).collect(Collectors.toList()))
                .workflowStageMappings  (workflowStageMappings.stream().map(WorkflowStageMappingDto::from).collect(Collectors.toList()))
                .build();
    }

    // of : 내부 (dto -> dto)
    public static WorkflowReqDto of(WorkflowDto workflowDto, List<WorkflowParamDto> workflowParams, List<WorkflowStageMappingDto> workflowStageMappings) {
        return WorkflowReqDto.builder()
                .workflowInfo(workflowDto)
                .workflowParams(workflowParams)
                .workflowStageMappings(workflowStageMappings)
                .build();
    }
}