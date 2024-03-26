package dev.langchain4j;

import dev.langchain4j.agent.tool.P;
import dev.langchain4j.agent.tool.Tool;
import dev.langchain4j.model.input.PromptTemplate;
import dev.langchain4j.model.output.FinishReason;
import org.junit.jupiter.api.Test;
import dev.langchain4j.model.openai.OpenAiChatModel;

import java.util.Map;
import java.util.Optional;

import static java.lang.String.format;
import static org.junit.jupiter.api.Assertions.*;

public class AgentTest {

    static class TestTool {

        private String lastMessage;

        Optional<String> lastMessage() {
            return Optional.ofNullable(lastMessage);
        }

        @Tool("tool for test AI system")
        String execTest(@P("test message") String message) {

            lastMessage = format( "test tool executed: %s", message);
            return lastMessage;
        }
    }
    @Test
    void agentCreationTest() throws Exception {
        var config = AIConfig.load();

        assertTrue(config.valueOf("OPENAI_API_KEY").isPresent());

        var chatLanguageModel = OpenAiChatModel.builder()
                .apiKey( config.valueOf("OPENAI_API_KEY").get() )
                .modelName( "gpt-3.5-turbo-0613" )
                .logResponses(true)
                .maxRetries(2)
                .temperature(0.0)
                .maxTokens(2000)
                .build();

        var tool = new TestTool();
        var agent = Agent.builder()
                .chatLanguageModel(chatLanguageModel)
                .tool(tool)
                .build();

        var msg = "hello world";
        var response = agent.execute( Map.of("input", format("this is an AI test with message: '%s'", msg) ));

        assertNotNull(response);
        assertEquals(response.finishReason(), FinishReason.TOOL_EXECUTION );
        var content = response.content();
        assertNotNull(content);
        assertNull( content.text());
        assertTrue(content.hasToolExecutionRequests());
        var toolExecutionRequests = content.toolExecutionRequests();
        assertEquals(1, toolExecutionRequests.size());
        var toolExecutionRequest = toolExecutionRequests.get(0);
        assertEquals("execTest", toolExecutionRequest.name());
        assertEquals("{  \"arg0\": \"hello world\"}", toolExecutionRequest.arguments().replaceAll("\n",""));

        System.out.println( response );

    }
}
